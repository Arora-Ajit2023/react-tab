/* eslint-disable react-refresh/only-export-components */
const HOC2 = ({ loading, children }) => {
  if (!loading) return <p>hi Ajit</p>;
  return children;
};

export default HOC2;
