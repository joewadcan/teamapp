import { useState, useEffect } from 'react';

// ─── App.jsx ──────────────────────────────────────────────────────────────────
// This is your starting point. It does one thing: call the backend health
// check and show you whether the connection is working.
//
// Once you see "Backend: connected ✓" and "Database: connected ✓" in the
// browser, your stack is working. At that point, delete all of this and
// start building your actual app.
//
// Build tip: keep this health check fetch as a reference for the pattern —
//   fetch('/api/your-route')
//     .then(res => res.json())
//     .then(data => ...)
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setHealth(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>MBA App Starter</h1>
      <p style={styles.subtitle}>Your app goes here.</p>

      <div style={styles.card}>
        <h2 style={styles.cardTitle}>Stack Status</h2>

        {error && (
          <StatusRow
            label="Backend"
            ok={false}
            detail={`Could not reach server — is it running? (${error})`}
          />
        )}

        {health && (
          <>
            <StatusRow
              label="Backend"
              ok={health.status === 'ok'}
              detail={health.status === 'ok' ? 'Express server responding' : 'Server error'}
            />
            <StatusRow
              label="Database"
              ok={health.database === 'connected'}
              detail={
                health.database === 'connected'
                  ? 'PostgreSQL connected'
                  : `DB error — check DATABASE_URL in your .env / Replit Secrets (${health.error})`
              }
            />
            <StatusRow
              label="Timestamp"
              ok={true}
              detail={new Date(health.timestamp).toLocaleString()}
            />
          </>
        )}

        {!health && !error && (
          <p style={styles.loading}>Checking connection…</p>
        )}
      </div>

      <p style={styles.hint}>
        Both green? Close this file and start building.
        <br />
        Something red? Check the README for troubleshooting steps.
      </p>
    </div>
  );
}

function StatusRow({ label, ok, detail }) {
  return (
    <div style={styles.row}>
      <span style={styles.label}>{label}</span>
      <span style={{ ...styles.badge, background: ok ? '#d1fae5' : '#fee2e2', color: ok ? '#065f46' : '#991b1b' }}>
        {ok ? '✓' : '✗'}
      </span>
      <span style={styles.detail}>{detail}</span>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'system-ui, sans-serif',
    maxWidth: '560px',
    margin: '80px auto',
    padding: '0 24px',
    color: '#1a1a1a',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    margin: '0 0 8px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    margin: '0 0 32px',
  },
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '24px',
    marginBottom: '24px',
  },
  cardTitle: {
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: '#6b7280',
    margin: '0 0 16px',
  },
  row: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    marginBottom: '12px',
  },
  label: {
    fontWeight: '600',
    fontSize: '14px',
    width: '80px',
    flexShrink: 0,
    paddingTop: '2px',
  },
  badge: {
    fontSize: '12px',
    fontWeight: '700',
    padding: '2px 8px',
    borderRadius: '4px',
    flexShrink: 0,
  },
  detail: {
    fontSize: '13px',
    color: '#374151',
    lineHeight: '1.5',
  },
  hint: {
    fontSize: '13px',
    color: '#9ca3af',
    lineHeight: '1.6',
  },
  loading: {
    color: '#9ca3af',
    fontSize: '14px',
  },
};
