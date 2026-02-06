import React, { useEffect, useState } from 'react'
import { useLocation } from '@docusaurus/router'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import { fetchGitHubUpdates } from '../../utils/github'

export default function UpdateDetailPage() {
  const location = useLocation()
  const slug = location.pathname.split('/').pop()
  console.log(slug)
  const [update, setUpdate] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return

    fetchGitHubUpdates(slug)
      .then(data => setUpdate(data))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) {
    return (
      <Layout title="Cargando...">
        <p className="p-8">Cargando actualización…</p>
      </Layout>
    )
  }

  if (!update) {
    return (
      <Layout title="No encontrado">
        <p className="p-8">Actualización no encontrada</p>
      </Layout>
    )
  }

  return (
    <Layout title={update.title} description={update.description}>
      <main className="container margin-vert--lg max-w-3xl">
        <Link to="/updates" className="text-primary text-sm">
          ← Volver a actualizaciones
        </Link>

        <h1 className="text-3xl font-bold mt-4">
          {update.title}
        </h1>

        <p className="text-sm text-slate-500 mt-2">
          {new Date(update.date).toLocaleDateString('es', {
            dateStyle: 'long',
          })}
        </p>

        <hr className="my-6" />

        <article
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: update.content }}
        />

        {update.commitUrl && (
          <a
            href={update.commitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-primary font-semibold"
          >
            Ver commit en GitHub →
          </a>
        )}
      </main>
    </Layout>
  )
}
