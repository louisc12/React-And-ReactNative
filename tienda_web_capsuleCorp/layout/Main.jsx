//UI components
import Card from "../components/Card";

const Main = () => {
  const data = [
    {
      image:
        "http://vignette4.wikia.nocookie.net/dbz-dokkanbattle/images/7/7c/Support_1.png/revision/latest?cb=20151123094148",
      route: "product/1",
      name: "Capsula Azul",
      price: "800"
    },
    {
      image:
        "http://vignette3.wikia.nocookie.net/dbz-dokkanbattle/images/3/35/Training_3.png/revision/latest?cb=20150903220933",
      route: "product/2",
      name: "Capsula Roja",
      price: "1500"
    },
    {
      image:
        "http://vignette3.wikia.nocookie.net/dbz-dokkanbattle/images/3/35/Training_3.png/revision/latest?cb=20150903220933",
      route: "product/3",
      name: "Capsula Dorada",
      price: "1200"
    },
    {
      image:
        "http://vignette3.wikia.nocookie.net/dbz-dokkanbattle/images/3/35/Training_3.png/revision/latest?cb=20150903220933",
      route: "product/3",
      name: "Capsula Dorada",
      price: "1200"
    }
  ];

  return (
    <main>
      <div>
        {data.map((elem, id) => (
          <Card
            key={id}
            image={elem.image}
            route={elem.route}
            name={elem.name}
            price={elem.price}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;

/* 
 <Card
          image={
            "http://vignette4.wikia.nocookie.net/dbz-dokkanbattle/images/7/7c/Support_1.png/revision/latest?cb=20151123094148"
          }
          route={"product/1"}
          name={"Capsula Azul"}
          price={"800"}
        />
        <Card
          image={
            "https://2.bp.blogspot.com/-xDGttS7N-JQ/Vzt2gH5DtXI/AAAAAAAAA0o/-PHJvTNOsJYeeVwxV7DFLOSkNJpmBAr-wCLcB/s1600/Support_4.png"
          }
          route={"product/2"}
          name={"Capsula Azul y Dorada"}
          price={"1200"}
        />
        <Card
          image={
            "http://vignette2.wikia.nocookie.net/dbz-dokkanbattle/images/3/3f/Training_4.png/revision/latest?cb=20150903220943"
          }
          route={"product/3"}
          name={"Capsula Roja y Dorada"}
          price={"1200"}
        />
        <Card
          image={
            "http://vignette3.wikia.nocookie.net/dbz-dokkanbattle/images/3/35/Training_3.png/revision/latest?cb=20150903220933"
          }
          route={"product/4"}
          name={"Capsula Azul y Dorada"}
          price={"1200"}
        />
        <Card
          image={
            "http://vignette1.wikia.nocookie.net/dbz-dokkanbattle/images/1/1b/Support_2.png/revision/latest?cb=20151123094157"
          }
          route={"product/5"}
        />
        <Card image={"https://pbs.twimg.com/media/EDFfx9lXYAYCIU8.png"} />
        <Card
          image={
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/820ad535-c310-4704-a9bc-eecf26bba444/d9nds2y-e961d4ec-b733-4163-a3a6-68c08d9dde4e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyMGFkNTM1LWMzMTAtNDcwNC1hOWJjLWVlY2YyNmJiYTQ0NFwvZDluZHMyeS1lOTYxZDRlYy1iNzMzLTQxNjMtYTNhNi02OGMwOGQ5ZGRlNGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HQneZkbgE1Znwq742Af3wF97tzN76u7fjRIe2t351jM"
          }
          route={"product/6"}
        />
        <Card
          image={
            "https://i.pinimg.com/originals/58/23/45/5823454690b31eb139c2f100fd51086a.png"
          }
          route={"product/7"}
        />
        <Card
          image={
            "https://c3.klipartz.com/pngpicture/421/590/sticker-png-corp-capsule.png"
          }
          route={"product/8"}
        />

*/
