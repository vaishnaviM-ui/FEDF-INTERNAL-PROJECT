function Categories() {

  const categories = [

    {
      icon: "💻",
      title: "Web Development",
      courses: "15 Courses"
    },

    {
      icon: "📊",
      title: "Data Science",
      courses: "8 Courses"
    },

    {
      icon: "🤖",
      title: "Artificial Intelligence",
      courses: "10 Courses"
    },

    {
      icon: "☁️",
      title: "Cloud Computing",
      courses: "6 Courses"
    },

    {
      icon: "🔐",
      title: "Cyber Security",
      courses: "7 Courses"
    },

    {
      icon: "📱",
      title: "Mobile Development",
      courses: "5 Courses"
    }

  ];

  return (
    <section className="categories">

      <h2>Explore Categories</h2>

      <div className="categories-grid">

        {categories.map((category, index) => (

          <div style={{ backgroundColor: 'rgb(191, 169, 169)' }}
            key={index}
            className="category-card"
          >

            <h1 >{category.icon}</h1>

            <h3>{category.title}</h3>

            <p>{category.courses}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;