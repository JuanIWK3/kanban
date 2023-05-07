export default function SideBar() {
  return (
    <div className="card shadow-lg">
      <div className="card-body ">
        <div className="card-title">Sidebar</div>
        <div className="divider" />
        <button className="btn btn-primary">New Task</button>
        <button className="btn btn-ghost">Notifications</button>
        <button className="btn btn-ghost">Calendar</button>
        <button className="btn btn-ghost btn-outline">Kanban</button>
        <button className="btn btn-ghost">All docs</button>
      </div>
    </div>
  );
}
