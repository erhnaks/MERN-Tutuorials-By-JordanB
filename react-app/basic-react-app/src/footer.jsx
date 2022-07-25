import "./footer.css";

const footer = () => {
  const myFooter = {
    msg1: "Hello",
    msg2: "Footer!",
    msg3: "What's up?",
  };

  return (
    <div className="footer">
      <p>{myFooter.msg1}</p>
      <p>{myFooter.msg2}</p>
      <p>{myFooter.msg3}</p>
    </div>
  );
};

export default footer;
