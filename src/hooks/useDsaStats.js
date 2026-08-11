import { useEffect, useState } from 'react'

const API_LEETCODE = 'https://leetpulse-api.vercel.app/api/leetcode/solved'
const API_CODECHEF = 'https://codechef-stats.tashif.codes'
const API_HACKERRANK = 'https://hackerrank-stats.tashif.codes'

const fallback = [
  { name: 'LeetCode', username: 'venkaiahkalikaya123', headline: 260, headlineLabel: 'Problems Solved', tags: ['196 Easy', '63 Medium', '1 Hard'], badge: '50 Days Badge 2026' },
  { name: 'CodeChef', username: 'venkey30', headline: 512, headlineLabel: 'Problems Solved', tags: ['1031 Rating', '1★', '1 Contest'] },
  { name: 'HackerRank', username: 'venkaiahkalikay1', headline: 5, headlineLabel: 'Python Rating', tags: ['54 Solved', '5 Badges', 'Problem Solving', 'C++', 'Java', 'C'] },
]

async function fetchJson(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

async function fetchLeetCode(username) {
  const d = await fetchJson(`${API_LEETCODE}/${username}`)
  return {
    name: 'LeetCode',
    username,
    headline: d.solvedProblem ?? 0,
    headlineLabel: 'Problems Solved',
    tags: [`${d.easySolved ?? 0} Easy`, `${d.mediumSolved ?? 0} Medium`, `${d.hardSolved ?? 0} Hard`],
  }
}

async function fetchCodeChef(handle) {
  const d = await fetchJson(`${API_CODECHEF}/${handle}`)
  const data = d?.data ?? {}
  return {
    name: 'CodeChef',
    username: handle,
    headline: data.totalSolved ?? 0,
    headlineLabel: 'Problems Solved',
    tags: [`${Math.round(data.currentRating ?? 0)} Rating`, `${data.rank ?? '★'}`, `${data.totalContests ?? 0} Contests`],
  }
}

async function fetchHackerRank(username) {
  const d = await fetchJson(`${API_HACKERRANK}/${username}`)
  const data = d?.data ?? {}
  return {
    name: 'HackerRank',
    username,
    headline: data.badgesCount ?? 0,
    headlineLabel: 'Python Rating',
    tags: [`${d.totalSolved ?? 0} Solved`, ...(data.badgesCount ? [`${data.badgesCount} Badges`] : [])],
  }
}

const fetchers = [
  ['LeetCode', fetchLeetCode],
  ['CodeChef', fetchCodeChef],
  ['HackerRank', fetchHackerRank],
]

export default function useDsaStats() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const results = await Promise.all(
          fetchers.map(([key, fn]) => fn(fallback.find((f) => f.name === key).username)),
        )
        if (!cancelled) setStats(results)
      } catch {
        if (!cancelled) {
          setStats(fallback)
          setError(true)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [])

  return { stats, loading, error }
}