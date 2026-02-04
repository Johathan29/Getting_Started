import React, { useEffect, useState } from 'react'
import Layout from '@theme/Layout'
import { useLocation } from '@docusaurus/router'

type CommitDetail = {
  sha: string
  message: string
  author: string
  date: string
  files: {
    filename: string
    status: string
    additions: number
    deletions: number
  }[]
}

export default function UpdateDetail() {
  const location = useLocation()
  const slug = location.pathname.replace('/updates/', '')

  const [commit, setCommit] = useState<CommitDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCommit() {
      try {
        const res = await fetch(
          `https://api.github.com/repos/Johathan29/petcareshops/commits/${slug}`
        )
        const data = await res.json()

        setCommit({
          sha: data.sha,
          message: data.commit.message,
          author: data.commit.author.name,
          date: data.commit.author.date,
          files: data.files || [],
        })
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }

    fetchCommit()
  }, [slug])

  return (
    <Layout title="Detalle de actualización">
      <main className="container margin-vert--lg">
        {loading && <p>Cargando actualización…</p>}

        {!loading && commit && (
          <>
            <h1 className="margin-bottom--sm">
              {commit.message.split('\n')[0]}
            </h1>

            <p className="text--secondary">
              <strong>Autor:</strong> {commit.author} <br />
              <strong>Fecha:</strong>{' '}
              {new Date(commit.date).toLocaleString('es')}
            </p>

            <hr className="margin-vert--md" />

            <h3>Archivos modificados</h3>

            <ul>
              {commit.files.map(file => (
                <li key={file.filename}>
                  <strong>{file.filename}</strong> — {file.status}
                  <br />
                  <small>
                    +{file.additions} / -{file.deletions}
                  </small>
                </li>
              ))}
            </ul>
          </>
        )}

        {!loading && !commit && (
          <p>No se pudo cargar el detalle del cambio.</p>
        )}
      </main>
    </Layout>
  )
}
