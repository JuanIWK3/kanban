interface TaskProps {
  title: string;
}

export default function Task({ title }: TaskProps) {
  return <div className="">{title}</div>;
}
