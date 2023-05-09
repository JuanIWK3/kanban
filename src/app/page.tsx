import Column from "@/components/Column";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-8">
      <div className="header">
        <div className="breadcrumbs">
          <ul>
            <li>
              <a>Kanban</a>
            </li>
            <li>
              <a>Product Design</a>
            </li>
            <li>
              <a>Mobile UI/UX</a>
            </li>
          </ul>
        </div>
        <h1 className="text-4xl font-bold">Kanban Board</h1>
      </div>
      <div className="flex">
        <Column state="TO DO" />
        <Column state="IN PROGRESS" />
        <Column state="DONE" />
      </div>
    </main>
  );
}
