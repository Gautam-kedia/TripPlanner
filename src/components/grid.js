import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
  
   <div className="bg-light">
    <div className="row">
    <div className="col mt-3 mb-5">
      {/* margine top and for diameter */}
    <Card style={{ width: '20rem', marginLeft:"20px" }} className="md-10">
      <Card.Img variant="top" src="attractions/HYDERABAD.jpg" style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>HYDERABAD</Card.Title>
        <Card.Text>
        Hyderabad, it known for its rich history, vibrant culture, and exquisite cuisine. Famous for its iconic Charminar and as the hub of the IT industry.
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>    
      </Card>
      </div>

      <div className="col mt-3">
      <Card style={{ width: '20rem'}}className="mb-5">
      <Card.Img variant="top" src="attractions/Bangalore-Palace_600.jpg" style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>BANGLORE</Card.Title>
        <Card.Text>
        Bangalore is the Silicon Valley of India.It Known for its pleasant climate, lush greenery, tradition and its historic landmarks.
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </div>
    <div className="col md-3 mt-3">
      <Card style={{ width: '20rem' }}className="mb-5">
      <Card.Img variant="top" src="attractions/mumbaii.jpg" style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>MUMBAI</Card.Title>
        <Card.Text>
        Mumbai, the financial capital of India, known for Bollywood glamour, and iconic landmarks like the Gateway of India.
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="col mt-3">
      <Card style={{ width: '20rem' }} className="mb-5">
      <Card.Img variant="top" src="attractions/shutterstock-redfort1.jpg" style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>DELHI</Card.Title>
        <Card.Text>
        Delhi, the capital city of India, with architectural marvels like the Red Fort,IndiaGate,magnificent temples and mosques with having great food.
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </div>



    <div className="col">
      <Card style={{ width: '20rem', marginLeft:"20px" }} className="ml-5">
      <Card.Img variant="top" src="attractions/Manali.webp" style={{ height: '200px', objectFit: 'cover'}} />
      <Card.Body>
        <Card.Title>MANALI</Card.Title>
        <Card.Text>
        Experience the breathtaking beauty and adventure of Manali, nestled in the Himalayas, perfect for nature lovers and thrill-seekers alike.Have the best time having maggie .
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="col">
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="attractions/jj.jpg" style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>JAIPUR</Card.Title>
        <Card.Text>
         Jaipur, the Pink City of India, mesmerizes with its majestic palaces, vibrant bazaars, and rich   Rajasthani culture, making it a royal destination for travelers.
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </div>


    <div className="col">
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="attractions/chn.jpg" style={{ height: '220px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>CHENNAI</Card.Title>
        <Card.Text>
        Chennai, the capital of Tamil Nadu, is a bustling metropolis known for its beautiful beaches, rich heritage, and vibrant cultural scene.
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="col mb-5">
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="attractions/kk.jpg" style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>KOLKATA</Card.Title>
        <Card.Text>
        Kolkata, the cultural capital of India, delights with its colonial architecture and rich cultural heritage, offering a unique blend of history for travelers to experience.
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="col">
      <Card style={{ width: '20rem', marginLeft:"20px" }}>
      <Card.Img variant="top" src="attractions/su.webp" style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>SURAT</Card.Title>
        <Card.Text>
        Kolkata, the cultural capital of India, delights with its colonial architecture and rich cultural heritage, offering a unique blend of history for travelers to experience.
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="col">
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="attractions/pu.jpeg" style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>PUNE</Card.Title>
        <Card.Text>
        Kolkata, the cultural capital of India, delights with its colonial architecture and rich cultural heritage, offering a unique blend of history for travelers to experience.
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="col">
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="attractions/vk.jpg" style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>VISHAKAPATNAM</Card.Title>
        <Card.Text>
        Visakhapatnam, also known as Vizag, is a coastal gem of Andhra Pradesh, boasting pristine beaches, scenic hills, rich cultural heritage and its delicous seafood.
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="col mb-5">
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="attractions/lk.jpg" style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>LUCKNOW</Card.Title>
        <Card.Text>
        Lucknow, the capital of Uttar Pradesh, is a city renowned for its rich history, elegant architecture, and mouthwatering cuisine. Explore the city's majestic monuments.
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="col">
      <Card style={{ width: '20rem', marginLeft:"20px"}}>
      <Card.Img variant="top" src="attractions/DK.jpeg" style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>DHANUSHKOTI</Card.Title>
        <Card.Text>
        Discover the serene and historic charm of Dhanushkodi, a coastal ghost town with pristine beaches and a fascinating past. Here the ruins tell tales of history  and beaches offer a peaceful retreat.
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="col">
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="attractions/shilong.jpeg" style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>SHILONG</Card.Title>
        <Card.Text>
        
"Explore the picturesque beauty of Shillong, known as the 'Scotland of the East,' with its lush hills, waterfalls, and vibrant culture. Immerse yourself in scenic viewpoints.
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="col">
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="attractions/bp.jpg" style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>BHOPAL</Card.Title>
        <Card.Text>
        Discover the rich history and cultural heritage of Bhopal, a city of lakes and magnificent Mughal architecture. Visit its historic sites, vibrant bazaars, and serene lakes .
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </div>

    <div className="col mb-5">
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="attractions/dar.jpeg" style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>DARJEELING</Card.Title>
        <Card.Text>
        Experience the enchanting allure of Darjeeling, nestled in the Himalayas, renowned for its lush tea gardens and panoramic views of Kanchenjunga. Enjoy a ride on Darjeeling Himalayan Railway
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>      
    // </div>  
  )
}

export default BasicExample;