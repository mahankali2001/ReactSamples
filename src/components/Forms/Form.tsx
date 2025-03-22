const Form = () => {
  return (
    <form>
      {/* div.mb-3>label.form-label+input.form-control */}
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Name:
        </label>
        <input type="text" className="form-control" />
      </div>
    </form>
  );
};

export default Form;
