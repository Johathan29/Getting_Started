import { useLocation } from '@docusaurus/router'
import { useEffect, useState } from 'react'
import Link from '@docusaurus/Link'
import { fetchGitHubUpdates } from '../../utils/github'

export  default function UpdateSlugPage() {
  const location = useLocation()

  // 👉 lo que venga después de /updates/
  const slug = location.pathname.replace('/updates/', '')

  

  console.log(slug)

  

  return (
    <main className="container margin-vert--lg max-w-3xl">
      <Link to="/updates" className="text-primary text-sm">
        ← Volver a actualizaciones
      </Link>

      <h1 className="text-3xl font-bold mt-4">
       asdasd
      </h1>

      <p className="text-sm text-slate-500 mt-2">
       adasd
      </p>

      <article className="prose dark:prose-invert mt-8">
     adasdasdasd
      </article>
    </main>
  )
}
