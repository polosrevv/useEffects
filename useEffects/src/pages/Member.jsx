import { useParams } from 'react-router';

const memberRoles = {
  'Steven Gonell': 'President',
  'Jane Smith': 'Treasurer',
  'John Doe': 'Web lead',
};

function Member() {
  const { name } = useParams();
  const role = memberRoles[name];

  if (!role) {
    return <h1>Member not found</h1>;
  }
  else {
    return (
      <div>
        <h1>Club member: {name}</h1>
        <p>Role: {role}</p>
      </div>
    );
  }
}

export default Member;
