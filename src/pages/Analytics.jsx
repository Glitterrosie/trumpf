import { useEffect, useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
  AreaChart, Area,
} from 'recharts'
import Header from '../components/Header'

const COLORS = ['#003366', '#009999', '#4B9B43', '#1038CC', '#6B7280', '#C0392B']

function StatCard({ label, value, sub }) {
  return (
    <div className="tr-stat-card">
      <span className="tr-stat-card__value">{value}</span>
      <span className="tr-stat-card__label">{label}</span>
      {sub && <span className="tr-stat-card__sub">{sub}</span>}
    </div>
  )
}

function ChartCard({ title, children, fullWidth }) {
  return (
    <div className={`tr-chart-card${fullWidth ? ' tr-chart-card--full' : ''}`}>
      <h2 className="tr-chart-card__title">{title}</h2>
      {children}
    </div>
  )
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="tr-chart-tooltip">
      <p className="tr-chart-tooltip__label">{label}</p>
      <p className="tr-chart-tooltip__value">{payload[0].value} Fragen</p>
    </div>
  )
}

export default function Analytics() {
  const [data, setData]     = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]   = useState(null)

  const fetchAnalytics = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/analytics')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setData(await res.json())
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchAnalytics() }, [])

  return (
    <div className="tr-app tr-app--analytics">
      <Header />
      <main className="tr-analytics">

        {/* Page title */}
        <div className="tr-analytics__hero">
          <div>
            <h1 className="tr-analytics__title">Kundenanalyse</h1>
            <p className="tr-analytics__subtitle">
              Anonymisierte Auswertung der Kundenfragen — Echtzeit-Analyse via Groq KI
            </p>
          </div>
          <button
            className="tr-btn tr-btn--secondary tr-analytics__refresh"
            onClick={fetchAnalytics}
            disabled={loading}
          >
            {loading ? 'Analysiere…' : 'Aktualisieren'}
          </button>
        </div>

        {error && (
          <div className="tr-analytics__error" role="alert">
            Fehler beim Laden der Analyse: {error}
          </div>
        )}

        {loading && !data && (
          <div className="tr-analytics__loading" aria-live="polite">
            <div className="tr-spinner" aria-label="Lade Analyse…" />
            <p>KI analysiert Kundenfragen…</p>
          </div>
        )}

        {data && (
          <>
            {/* KPI row */}
            <div className="tr-stat-row">
              <StatCard label="Gesamtfragen" value={data.total} />
              <StatCard
                label="Häufigste Kategorie"
                value={data.categories?.[0]?.name || '—'}
                sub={data.categories?.[0]?.count ? `${data.categories[0].count}×` : undefined}
              />
              <StatCard
                label="Feature-Wünsche"
                value={data.featureRequests?.reduce((s, r) => s + r.count, 0) || 0}
              />
              <StatCard
                label="Tage mit Aktivität"
                value={data.trend?.length || 0}
              />
            </div>

            {/* AI Insights box */}
            {data.insights && (
              <div className="tr-insights">
                <span className="tr-insights__tag">KI-Erkenntnisse</span>
                <p className="tr-insights__text">{data.insights}</p>
              </div>
            )}

            {/* Charts grid */}
            <div className="tr-charts-grid">

              {/* Top 10 questions */}
              <ChartCard title="Top 10 häufigste Fragen">
                {data.topQuestions?.length > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      layout="vertical"
                      data={data.topQuestions.slice(0, 10)}
                      margin={{ left: 8, right: 24, top: 4, bottom: 4 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#D1D5DB" horizontal={false} />
                      <XAxis type="number" tick={{ fontSize: 12 }} />
                      <YAxis
                        type="category"
                        dataKey="topic"
                        width={160}
                        tick={{ fontSize: 11 }}
                        tickFormatter={(v) => v.length > 22 ? v.slice(0, 22) + '…' : v}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="count" fill="#003366" radius={[0, 2, 2, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                ) : <p className="tr-chart-empty">Noch keine Daten vorhanden.</p>}
              </ChartCard>

              {/* Category distribution */}
              <ChartCard title="Kategorien-Verteilung">
                {data.categories?.length > 0 ? (
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={data.categories}
                        dataKey="count"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                        labelLine={false}
                      >
                        {data.categories.map((_, i) => (
                          <Cell key={i} fill={COLORS[i % COLORS.length]} />
                        ))}
                      </Pie>
                      <Legend wrapperStyle={{ fontSize: '12px' }} />
                      <Tooltip formatter={(v) => [`${v} Fragen`, '']} />
                    </PieChart>
                  </ResponsiveContainer>
                ) : <p className="tr-chart-empty">Noch keine Daten vorhanden.</p>}
              </ChartCard>

              {/* Feature requests */}
              <ChartCard title="Feature-Wünsche">
                {data.featureRequests?.length > 0 ? (
                  <ResponsiveContainer width="100%" height={260}>
                    <BarChart
                      layout="vertical"
                      data={data.featureRequests}
                      margin={{ left: 8, right: 24, top: 4, bottom: 4 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#D1D5DB" horizontal={false} />
                      <XAxis type="number" tick={{ fontSize: 12 }} />
                      <YAxis
                        type="category"
                        dataKey="feature"
                        width={160}
                        tick={{ fontSize: 11 }}
                        tickFormatter={(v) => v.length > 22 ? v.slice(0, 22) + '…' : v}
                      />
                      <Tooltip formatter={(v) => [`${v}×`, 'Nennungen']} />
                      <Bar dataKey="count" fill="#009999" radius={[0, 2, 2, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                ) : <p className="tr-chart-empty">Keine expliziten Feature-Wünsche erkannt.</p>}
              </ChartCard>

              {/* Customer needs */}
              <ChartCard title="Kundenbedürfnisse">
                {data.customerNeeds?.length > 0 ? (
                  <ResponsiveContainer width="100%" height={260}>
                    <BarChart
                      layout="vertical"
                      data={data.customerNeeds}
                      margin={{ left: 8, right: 24, top: 4, bottom: 4 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#D1D5DB" horizontal={false} />
                      <XAxis type="number" tick={{ fontSize: 12 }} />
                      <YAxis
                        type="category"
                        dataKey="need"
                        width={160}
                        tick={{ fontSize: 11 }}
                        tickFormatter={(v) => v.length > 22 ? v.slice(0, 22) + '…' : v}
                      />
                      <Tooltip formatter={(v) => [`${v}×`, 'Nennungen']} />
                      <Bar dataKey="count" fill="#4B9B43" radius={[0, 2, 2, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                ) : <p className="tr-chart-empty">Noch keine Daten vorhanden.</p>}
              </ChartCard>

              {/* Trend over time — full width */}
              <ChartCard title="Fragen im Zeitverlauf" fullWidth>
                {data.trend?.length > 0 ? (
                  <ResponsiveContainer width="100%" height={220}>
                    <AreaChart
                      data={data.trend}
                      margin={{ left: 0, right: 24, top: 8, bottom: 4 }}
                    >
                      <defs>
                        <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%"  stopColor="#003366" stopOpacity={0.25} />
                          <stop offset="95%" stopColor="#003366" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#D1D5DB" />
                      <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                      <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                      <Tooltip formatter={(v) => [`${v} Fragen`, 'Anzahl']} />
                      <Area
                        type="monotone"
                        dataKey="count"
                        stroke="#003366"
                        strokeWidth={2}
                        fill="url(#trendGradient)"
                        dot={{ r: 3, fill: '#003366' }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : <p className="tr-chart-empty">Noch keine Zeitreihen-Daten vorhanden.</p>}
              </ChartCard>

            </div>
          </>
        )}
      </main>
    </div>
  )
}
