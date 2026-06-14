import type { LifeAdminStreamRow } from "@/lib/portfolio-types";

interface TransactionStreamProps {
  label: string;
  rows: LifeAdminStreamRow[];
}

const statusLabels: Record<LifeAdminStreamRow["status"], string> = {
  ingested: "ingested",
  normalized: "normalized",
  candidate: "candidate",
  confirmed: "confirmed",
  price_change: "price change",
  alert_ready: "alert ready",
};

export function TransactionStream({ label, rows }: TransactionStreamProps) {
  return (
    <section
      className="transaction-stream"
      aria-labelledby="transaction-stream-title"
    >
      <header className="transaction-stream__header">
        <div>
          <p className="transaction-stream__eyebrow">sample signal stream</p>
          <h3 id="transaction-stream-title">Simulated V1 detection stream</h3>
        </div>
        <p>{label}</p>
      </header>
      <ol className="transaction-stream__rows">
        {rows.map((row) => (
          <li
            key={`${row.time}-${row.signal}`}
            className="transaction-stream__row"
            data-status={row.status}
          >
            <span className="transaction-stream__time">{row.time}</span>
            <span className="transaction-stream__signal">{row.signal}</span>
            <span className="transaction-stream__amount">{row.amount}</span>
            <span className="transaction-stream__stage">{row.stage}</span>
            <span className="transaction-stream__status">
              {statusLabels[row.status]}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
