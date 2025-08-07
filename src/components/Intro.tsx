import './Intro.scss'
import { Form } from "react-router-dom"
import { FaUserPlus } from "react-icons/fa";

const Intro = () => {
  return (
    <div className="intro">
      <div className='mainGrid'>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <FaUserPlus  width={20} />
          </button>
        </Form>
      </div>
      <img className='illustration-img' src="illustration.jpg" alt="Person with money and chart behind her" width={600} />
    </div>
  )
}
export default Intro