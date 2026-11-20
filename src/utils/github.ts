// utils/github.ts

export async function fetchGitHubUpdates(latestSha?: string) {
  const res = await fetch(
    'https://api.github.com/repos/Johathan29/petcareshops/commits'
  )

  if (!res.ok) {
    throw new Error('No se pudieron obtener los commits')
  }

  const data = await res.json()

  const updates = data.map((commit: any) => ({
    slug: commit.sha,
    title: commit.commit.message.split('\n')[0],
    description: commit.commit.message,
    date: commit.commit.author.date,
    content: commit.commit.url,
    author: commit.commit.author.name,
  }))

  if (latestSha && updates[0]?.slug === latestSha) {
    return null
  }

  return updates
}

export async function fetchGitHubRespository(repositoryName: string) {
  const url = `https://api.github.com/repos/Johathan29/${repositoryName}/commits`

  console.log('Consultando:', url)

  const response = await fetch(url)

  const data = await response.json()



  if (!response.ok) {
    throw new Error(
      `GitHub respondió ${response.status}: ${
        data?.message || 'Error desconocido'
      }`
    )
  }

  return data
}


export async function fetchCommitDetail(sha: string) {
  const response = await fetch(
    `https://api.github.com/repos/Johathan29/petcareshops/commits/${sha}`
  )

  if (!response.ok) {
    throw new Error(
      `No se pudo consultar el commit: ${response.status}`
    )
  }

  return response.json()
}