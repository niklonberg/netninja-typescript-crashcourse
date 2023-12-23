// intersection type

type PersonA = {
  firstName: string;
  id: number;
};

// we can use intersection types like below, by saying type b is = type a & something else
type UserA = PersonA & {
  email: string;
};

// we can use intersection types with a generic function

interface HasID {
  id: number;
}

// here we return an intersection between two things
function addIdToValue<T>(value: T): T & HasID {
  const id = Math.random();

  return { ...value, id };
}

interface PostA {
  title: string;
  thumbsUp: number;
}

// if we hover over post we can see that it is an intersection type
const post = addIdToValue<PostA>({ title: "marmite rules", thumbsUp: 2450 });
console.log(post.id, post.title, post.thumbsUp);
