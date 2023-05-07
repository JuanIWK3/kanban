interface ColumnProps {
  state: "TO DO" | "IN PROGRESS" | "DONE";
}

export default function Column({ state }: ColumnProps) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">{state}</div>
      </div>
    </div>
  );
}
