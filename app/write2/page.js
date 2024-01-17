'use-client';

import { handleSubmit } from './actions';

//1. 페이지만들었음
export default async function Write2() {
  return (
    <form action={handleSubmit}>
      <input type="text" name="title" />
      <button type="submit">Submit</button>
    </form>
  );
}
