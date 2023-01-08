type Props = {
  name: number;
  description: string;
  color: string;
};

const Configuration = ({ name, description, color }: Props) => {
  return (
    <div className="m-2 border-2 border-black p-2">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{color}</p>
    </div>
  );
};
export default Configuration;
