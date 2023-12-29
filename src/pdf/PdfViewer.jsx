import { useEffect, useState } from 'react';
import { PDFViewer, Document, Page, Text, StyleSheet, } from '@react-pdf/renderer';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    // fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    // fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    // fontFamily: 'Times-Roman'
  },
  // image: {
  //   marginVertical: 15,
  //   marginHorizontal: 100,
  // },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const PdfViewer = () => {
  const { id } = useParams();
  // console.log(id);
  const [bookDetails, setBookDetails] = useState([]);
  // console.log(bookDetails);
  const { name, author, description } = bookDetails;


  useEffect(() => {
    axios.get(`https://library-management-server-flame.vercel.app/bookDetails/${id}`, { withCredentials: true })
      .then(res => {
        // console.log(res.data)
        setBookDetails(res.data);
        // setDataLoading(false);

      })
      .catch(error => {
        return (error);

      });
  }, [])



  return (
    <div>
      <Link to={`/bookDetails/${id}`}><button className="btn btn-outline btn-error w-full font-bold">Close PDF Viewer</button></Link>
      <PDFViewer style={{ width: '100%', height: '100vh' }} className='pt-'>
        <Document>
          {/* <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.author}>{author}</Text>
              <Text style={styles.text}>{description}</Text>
            </View>
          </Page> */}
          <Page style={styles.body}>
            <Text style={styles.header} fixed>
              ~ Created with react-pdf ~
            </Text>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.subtitle}>
              {description}
            </Text>
            <Text style={styles.text}>

            </Text>
            <Text style={styles.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestiae rem perspiciatis voluptate quo nobis, minus aspernatur voluptas blanditiis error autem repudiandae iure perferendis debitis possimus reprehenderit sapiente harum expedita labore temporibus odio sequi eligendi earum ut! Officiis molestiae amet fuga aliquid et, illum consectetur dicta accusantium, nisi minima modi, ipsam sapiente. Velit impedit consequuntur consequatur placeat in, rem deserunt! Debitis veritatis magni nihil perferendis quibusdam, id unde odio ducimus pariatur nam esse ratione quas illum? Aperiam perspiciatis vero sapiente dignissimos beatae aliquid reiciendis non? Provident dicta temporibus fuga dignissimos architecto suscipit velit odit hic deserunt. Impedit debitis exercitationem hic.
            </Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni fuga, sit, dolor quo nulla atque tempora, praesentium ullam mollitia quod repellendus est facilis nisi natus fugiat esse magnam autem cum minus fugit. Neque, sed similique ad sint quidem eveniet! Aliquid quaerat, voluptatum ducimus necessitatibus, at consequatur natus, repudiandae quae eum aliquam quam possimus molestiae quod minima consectetur quisquam maxime aperiam animi esse quasi! Maiores autem, eum excepturi nisi id ullam molestias accusantium, architecto nobis ipsa maxime facere deserunt numquam, omnis quaerat incidunt totam beatae alias doloribus deleniti tempora nostrum doloremque! Enim quasi assumenda quam minima molestiae repellendus sed explicabo natus!
            </Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatibus, aliquam dolore laboriosam dolorem, alias reiciendis tempore distinctio, non in odit eligendi mollitia commodi fugit eius pariatur! Veniam atque porro quae praesentium, laborum enim maxime labore commodi ad cumque debitis, corporis earum? Voluptates deserunt natus repudiandae architecto aspernatur consequuntur? Recusandae.
            </Text>
            <Text style={styles.subtitle} break>
              Capítulo II: Que trata de la primera salida que de su tierra hizo el
              ingenioso Don Quijote
            </Text>
            <Text style={styles.text}>
              Hechas, pues, estas prevenciones, no quiso aguardar más tiempo a poner
              en efeto su pensamiento, apretándole a ello la falta que él pensaba que
              hacía en el mundo su tardanza, según eran los agravios que pensaba
              deshacer, tuertos que enderezar, sinrazones que emendar y abusos que
              mejorar y deudas que satisfacer. Y así, sin dar parte a persona alguna
              de su intención y sin que nadie le viese, una mañana, antes del día, que
              era uno de los calurosos del mes de Julio, se armó de todas sus armas,
              subió sobre Rocinante, puesta su mal compuesta celada, embrazó su
              adarga, tomó su lanza y por la puerta falsa de un corral salió al campo
              con grandísimo contento y alborozo de ver con cuánta facilidad había
              dado principio a su buen deseo. Mas apenas se vio en el campo cuando le
              asaltó un pensamiento terrible, y tal, que por poco le hiciera dejar la
              comenzada empresa; y fue que le vino a la memoria que no era armado
              caballero, y que, conforme a ley de caballería, ni podía ni debía tomar
              armas con ningún caballero; y puesto que lo fuera, había de llevar armas
              blancas, como novel caballero, sin empresa en el escudo, hasta que por
              su esfuerzo la ganase. Estos pensamientos le hicieron titubear en su
              propósito; mas pudiendo más su locura que otra razón alguna, propuso de
              hacerse armar caballero del primero que topase, a imitación de otros
              muchos que así lo hicieron, según él había leído en los libros que tal
              le tenían. En lo de las armas blancas, pensaba limpiarlas de manera, en
              teniendo lugar, que lo fuesen más que un arminio; y con esto se quietó18
              y prosiguió su camino, sin llevar otro que aquel que su caballo quería,
              creyendo que en aquello consistía la fuerza de las aventuras
            </Text>
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
              `${pageNumber} / ${totalPages}`
            )} fixed />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default PdfViewer;
