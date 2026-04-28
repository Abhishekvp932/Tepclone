'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { api } from '@/service/api'

type Service = {
  _id: string
  title: string
  description: string
  icon: string
  order: number
  isActive: boolean
}

type ServiceForm = Omit<Service, '_id'>

const emptyForm: ServiceForm = {
  title: '',
  description: '',
  icon: 'default',
  order: 0,
  isActive: true,
}

const iconOptions = ['default', 'globe', 'cog', 'chip', 'pipe']

export default function AdminDashboardPage() {
  const router = useRouter()
  const [services, setServices] = useState<Service[]>([])
  const [form, setForm] = useState<ServiceForm>(emptyForm)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  const sortedServices = useMemo(
    () => [...services].sort((a, b) => a.order - b.order),
    [services]
  )

  const loadServices = async () => {
    const { data } = await api.get('/api/services/admin')
    setServices(data.data)
  }

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/login')
      return
    }

    loadServices()
      .catch(() => router.push('/admin/login'))
      .finally(() => setLoading(false))
  }, [router])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSaving(true)
    setMessage('')

    try {
      if (editingId) {
        await api.put(`/api/services/${editingId}`, form)
        setMessage('Service updated successfully.')
      } else {
        await api.post('/api/services', form)
        setMessage('Service added successfully.')
      }

      setForm(emptyForm)
      setEditingId(null)
      await loadServices()
    } catch {
      setMessage('Unable to save service. Please check the fields and try again.')
    } finally {
      setSaving(false)
    }
  }

  const handleEdit = (service: Service) => {
    setEditingId(service._id)
    setForm({
      title: service.title,
      description: service.description,
      icon: service.icon,
      order: service.order,
      isActive: service.isActive,
    })
  }

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm('Delete this service?')
    if (!confirmed) return

    await api.delete(`/api/services/${id}`)
    await loadServices()
  }

  const handleLogout = async () => {
    await api.post('/api/auth/logout').catch(() => undefined)
    localStorage.removeItem('adminToken')
    router.push('/admin/login')
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-dark text-white flex items-center justify-center">
        <p className="text-gray-400">Loading admin panel...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-dark text-white">
      <div className="border-b border-dark-border bg-dark-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Admin Panel</p>
            <h1 className="mt-1 text-2xl font-bold">Manage Services</h1>
          </div>
          <div className="flex gap-3">
            <Link href="/" className="btn-outline text-xs">Website</Link>
            <button onClick={handleLogout} className="btn-primary text-xs">Logout</button>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[420px_1fr] lg:px-8">
        <form onSubmit={handleSubmit} className="h-fit border border-dark-border bg-dark-card p-5">
          <h2 className="text-lg font-semibold">{editingId ? 'Edit Service' : 'Add Service'}</h2>

          <div className="mt-5 space-y-4">
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-gray-400">Title</span>
              <input
                value={form.title}
                onChange={(event) => setForm({ ...form, title: event.target.value })}
                className="mt-2 w-full border border-dark-border bg-dark px-4 py-3 text-sm outline-none focus:border-primary"
                required
              />
            </label>

            <label className="block">
              <span className="text-xs uppercase tracking-wider text-gray-400">Description</span>
              <textarea
                value={form.description}
                onChange={(event) => setForm({ ...form, description: event.target.value })}
                className="mt-2 min-h-28 w-full resize-y border border-dark-border bg-dark px-4 py-3 text-sm outline-none focus:border-primary"
                required
              />
            </label>

            <div className="grid grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs uppercase tracking-wider text-gray-400">Icon</span>
                <select
                  value={form.icon}
                  onChange={(event) => setForm({ ...form, icon: event.target.value })}
                  className="mt-2 w-full border border-dark-border bg-dark px-4 py-3 text-sm outline-none focus:border-primary"
                >
                  {iconOptions.map((icon) => (
                    <option key={icon} value={icon}>{icon}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-xs uppercase tracking-wider text-gray-400">Order</span>
                <input
                  value={form.order}
                  onChange={(event) => setForm({ ...form, order: Number(event.target.value) })}
                  type="number"
                  className="mt-2 w-full border border-dark-border bg-dark px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </label>
            </div>

            <label className="flex items-center gap-3 text-sm text-gray-300">
              <input
                checked={form.isActive}
                onChange={(event) => setForm({ ...form, isActive: event.target.checked })}
                type="checkbox"
                className="h-4 w-4 accent-primary"
              />
              Show on website
            </label>
          </div>

          {message && <p className="mt-4 text-sm text-gray-300">{message}</p>}

          <div className="mt-6 flex gap-3">
            <button type="submit" disabled={saving} className="btn-primary disabled:opacity-60">
              {saving ? 'Saving...' : editingId ? 'Update' : 'Add Service'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null)
                  setForm(emptyForm)
                }}
                className="btn-outline"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <section className="border border-dark-border bg-dark-card">
          <div className="border-b border-dark-border px-5 py-4">
            <h2 className="text-lg font-semibold">Services</h2>
          </div>

          <div className="divide-y divide-dark-border">
            {sortedServices.length === 0 ? (
              <p className="p-5 text-sm text-gray-400">No services yet. Add your first service from the form.</p>
            ) : sortedServices.map((service) => (
              <article key={service._id} className="grid gap-4 p-5 md:grid-cols-[1fr_auto]">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-semibold text-white">{service.title}</h3>
                    <span className="border border-dark-border px-2 py-1 text-xs text-gray-400">
                      {service.icon} / order {service.order}
                    </span>
                    {!service.isActive && (
                      <span className="border border-red-900/60 px-2 py-1 text-xs text-red-300">Hidden</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{service.description}</p>
                </div>
                <div className="flex items-start gap-3">
                  <button onClick={() => handleEdit(service)} className="btn-outline text-xs">Edit</button>
                  <button onClick={() => handleDelete(service._id)} className="border border-red-900/70 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-red-300 transition hover:bg-red-950/30">
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
