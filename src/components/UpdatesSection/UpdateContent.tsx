import React, { useEffect, useState } from 'react'
import { useLocation } from '@docusaurus/router'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import { fetchGitHubUpdates } from '../../utils/github'

export default function UpdateContent() {
  const location = useLocation()
  const slug = location.pathname.split('/').pop()
console.log(slug)
  const [update, setUpdate] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return

    fetchGitHubUpdates(slug)
      .then(setUpdate)
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) return <p>Cargando actualización…</p>
  if (!update) return <p>No se encontró esta actualización.</p>

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

        {/* contenido markdown del commit */}
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
