export const NewFile = ({name, age, hobby}:{name: string; age: number; hobby: string}) => {
  return (
    <h1>{name}-{age}-{hobby}</h1>
  );
};