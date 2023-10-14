import { Form } from 'react-router-dom';

// library
import { UserPlusIcon } from '@heroicons/react/24/solid';

// assets
import frontPageIllustration from "../assets/frontPageIllustration.jpg";

export default function Intro () {
  return (
    <div className='intro'>
      <img
        src={frontPageIllustration}
        alt='People climbing ladders'
        width={500}
      />
      <div>
        <h1>
          Take Control of <span className='accent'>Your Wealth</span>
        </h1>
        <p>
          Budget for the life you <span className='accent'>want</span>. Your
          Journey begins today.
        </p>
        <Form method='post'>
          <input
            type='text'
            name='userName'
            required
            placeholder='What is your name?'
            aria-label='Your Name'
            autoComplete='given-name'
          />
          <input type ="hidden" name = "_action" value = "newUser"/>
          <button type='submit' className='btn btn--dark'>
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
    </div>
  );
};

