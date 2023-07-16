import Container from "../components/Container";
import Card from "../components/Card";

const Home = ({ formData }) => {
  return (
    <div>
      <Container>
        {formData.posts.map((item) => (
          <Card key={item.postId} {...item} />
        ))}
      </Container>
    </div>
  );
};

export default Home;
