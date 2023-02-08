function PersonalInfo() {
  return (
    <div>
      <h2>Personal Info</h2>
      <p>Please provide your name, e-mail address, and phone number</p>
      <form>
        <label htmlFor="userName">
          <span>Name</span>
          <input type="text" name="name" id="userName" />
        </label>
        <label htmlFor="userEmail">
          <span>E-mail</span>
          <input type="email" name="email" id="userEmail" />
        </label>
        <label htmlFor="userPhone">
          <span>Phone number</span>
          <input type="tel" name="phone" id="userPhone" />
        </label>
      </form>
    </div>
  );
}

export default PersonalInfo;
