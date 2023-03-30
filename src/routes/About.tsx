import { useAppSelector } from "../app/hooks";
const About = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  return (
    <div>
      {isAuth && <h1>This appears cause you are authenticated! Yey</h1>}
      About
    </div>
  );
};

export default About;
