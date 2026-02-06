export async function fetchGitHubUpdates(latestSha?: string) {
  const res = await fetch(
    'https://api.github.com/repos/Johathan29/petcareshops/commits'
  )

  const data = await res.json()

  const updates = data.map((commit: any) => ({
    slug: commit.sha,
    title: commit.commit.message.split('\n')[0],
    description: commit.commit.message,
    date: commit.commit.author.date,
  }))

  if (latestSha && updates[0]?.slug === latestSha) {
    return null // ❌ no hay cambios
  }

  return updates
}
