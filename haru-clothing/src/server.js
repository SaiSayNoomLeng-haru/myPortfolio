import { createServer, Model } from "miragejs";

createServer({
    models: {
        products: Model,
        blogs: Model,
        reviews: Model,
        filters: Model,
        teams: Model,
        faqs: Model
    },

    seeds(server){
        server.create("product", {id: "w001", name: "Loose Pu Leather Straight Jacket", category: "women", size: ["s", "m", "l", "xl", "xxl"], price: 48, discount: 10, brand: "nuuly", availableColor: ['green', 'brown', 'gray'], type: 'jacket', imageUrl: [{img1: "/assets/images/products/w001-img1.jpg"}, {img2: "/assets/images/products/w001-img2.jpg"}, {img3: "/assets/images/products/w001-img3.jpg"}, {img4: "/assets/images/products/w001-img4.jpg"}, {img5: "/assets/images/products/w001-img5.jpg"}], productDetail: "Composition: 100% Polyurethane Design: Button Style: Elegant, Romantic Thickness: Regular Material: Faux Leather Sleeve Length: Long Sleeve Occasion: Leisure, Vacation, Party, Work", rating: 4.5})

        server.create("product", {id: "w002", name: "Large pockets breasted suede jacket", category: "women", size: ["s", "m", "l", "xl", "xxl"], price: 36, discount: 8, brand: "nuuly", availableColor: ['green', 'brown', 'gray', 'yellow'], type: 'jacket', imageUrl: [{img1: "/assets/images/products/w002-img1.jpg"}, {img2: "/assets/images/products/w002-img2.jpg"}, {img3: "/assets/images/products/w002-img3.jpg"}], productDetail: " Composition: 90% Polyester, 10% Elastane Design: Plain Style: Casual Thickness: Regular Sheer: No Material: Suede Sleeve Length: Long Sleeve Occasion: Leisure, Wedding, Home, Vacation, Work", rating: 4.2})

        server.create("product", {id: "w003", name: "Chocolate Chip Jacket", category: "women", size: ["s", "m", "l", "xl"], price: 37, discount: 12, brand: "nuuly", availableColor: ['purple', 'gray', 'dark green'], type: 'jacket', imageUrl: [{img1: "/assets/images/products/w003-img1.jpg"}, {img2: "/assets/images/products/w003-img2.jpg"}, {img3: "/assets/images/products/w003-img3.jpg"},{img4: "/assets/images/products/w003-img4.jpg"}, {img5: "/assets/images/products/w002-img5.jpg"}], productDetail: "Details Vegan leather shacket Snap button front Large chest pockets Long sleeves Collared neckline Oversized fit Full length of a size medium from front: 28.5 inches Full length of a size medium from back: 31 inches Materials and Care Shell: 55% polyester, 45% polyurethane Hand wash cold Hang dry", rating: 4.8})

        server.create("product", {id: "w004", name: "Faux Leather Jacket", category: "women", size: ["s", "m", "l"], price: 148, discount: 15, brand: "nuuly", availableColor: ['red', 'gray', 'dark blue'], type: 'jacket', imageUrl: [{img1: "/assets/images/products/w004-img1.jpg"}, {img2: "/assets/images/products/w004-img2.jpg"}, {img3: "/assets/images/products/w004-img3.jpg"},{img4: "/assets/images/products/w004-img4.jpg"}], productDetail: "The name 'Maeve' references a purple flower, a Greek goddess and a famously beautiful Irish warrior queen, all inspirations for this structured, delicate Exclusive to Anthropologie, Maeve designs are refined, flattering and endlessly wearable.", rating: 4.4})

        server.create("product", {id: "w005", name: "Faux Leather Jacket II", category: "women", size: ["s", "m", "l", "xl", "xxl"], price: 158, discount: 20, brand: "nuuly", availableColor: ['green', 'brown', 'gray'], type: 'jacket', imageUrl: [{img1: "/assets/images/products/w005-img1.jpg"}, {img2: "/assets/images/products/w005-img2.jpg"}, {img3: "/assets/images/products/w005-img3.jpg"}, {img4 : "/assets/images/products/w005-img5.jpg"}], productDetail: "Rent Faux Leather Jacket from Nuuly. Pick 6 items for $98/month. Free shipping + returns.", rating: 4.2})

        server.create("product", {id: "w006", name: "Contrast Binding Button Trench Coat", category: "women", size: ["s", "m", "l"], price: 258, discount: 20, brand: "commense", availableColor: ['pale yellow', 'brown', 'gray'], type: 'jacket', imageUrl: [{img1: "/assets/images/products/w006-img1.jpg"}, {img2: "/assets/images/products/w006-img2.jpg"},{img3: "/assets/images/products/w006-img3.jpg"}, {img4: "/assets/images/products/w006-img4.jpg"},{img5: "/assets/images/products/w006-img5"}], productDetail: "Rent Faux Leather Jacket from Nuuly. Pick 6 items for $98/month. Free shipping + returns.", rating: 4.2})


        // long coat
        server.create("product", {id: "w007", name: "Soft Wrap Coat Jacket", category: "women", size: ["s", "m", "l"], price: 228, discount: 18, brand: "normal", availableColor: ['black', 'brown', 'gray'], type: 'coat', imageUrl: [{img1: "/assets/images/products/w007-img1.jpg"}, {img2: "/assets/images/products/w007-img2.jpg"},{img3: "/assets/images/products/w007-img3.jpg"}, {img4: "/assets/images/products/w007-img4.jpg"}], productDetail: "Rent Faux Leather Jacket from Nuuly. Pick 6 items for $98/month. Free shipping + returns.", rating: 4.2})

        server.create("product", {id: "w008", name: "Premium Wool Blend Wrap Coat", category: "women", size: ["s", "m", "l"], price: 298, discount: 28, brand: "normal", availableColor: ['black', 'brown', 'gray'], type: 'coat', imageUrl: [{img1: "/assets/images/products/w008-img1.jpg"}, {img2: "/assets/images/products/w008-img2.jpg"},{img3: "/assets/images/products/w008-img3.jpg"}, {img4: "/assets/images/products/w008-img4.jpg"}, {img5: "/assets/images/products/w008-img5"}], productDetail: "Rent Faux Leather Jacket from Nuuly. Pick 6 items for $98/month. Free shipping + returns.", rating: 4.2})

        server.create("product", {id: "w009", name: "Chic Double Breasted Korean Inspired Trench Coat", category: "women", size: ["s", "m", "l"], price: 188, discount: 15, brand: "normal", availableColor: ['gray', 'brown', 'black'], type: 'coat', imageUrl: [{img1: "/assets/images/products/w009-img1.jpg"}, {img2: "/assets/images/products/w009-img2.jpg"},{img3: "/assets/images/products/w009-img3.jpg"}, {img4: "/assets/images/products/w009-img4.jpg"},{img5: "/assets/images/products/w009-img5"}], productDetail: " Korean-inspired minimalist design for a modern edge. Ideal for layering over casual or formal attire.", rating: 4.7})

        server.create("product", {id: "w010", name: "Forest Plaid Coat", category: "women", size: ["s", "m", "l"], price: 158, discount: 20, brand: "normal", availableColor: ['gray', 'brown', 'black'], type: 'coat', imageUrl: [{img1: "/assets/images/products/w010-img1.jpg"}, {img2: "/assets/images/products/w010-img2.jpg"},{img3: "/assets/images/products/w010-img3.jpg"}, {img4: "/assets/images/products/w010-img4.jpg"},{img5: "/assets/images/products/w010-img5"}], productDetail: "Rent Faux Leather Jacket from Nuuly. Pick 6 items for $98/month. Free shipping + returns.", rating: 4.7})

        server.create("product", {id: "w011", name: "Astoria Classic Wraparound Wool Blend Overcoat", category: "women", size: ["m", "l", "xl"], price: 350, discount: 12, brand: "normal", availableColor: ['gray', 'brown', 'black'], type: 'coat', imageUrl: [{img1: "/assets/images/products/w011-img1.jpg"}, {img2: "/assets/images/products/w011-img2.jpg"},{img3: "/assets/images/products/w011-img3.jpg"}, {img4: "/assets/images/products/w011-img4.jpg"},{img5: "/assets/images/products/w011-img5"}], productDetail: "Description: A timeless wardrobe staple, this wool/cashmere coat exudes luxe sophistication offering an unmatched combination of warmth, softness and lightness. Product Details: Outer Fabric: 60% Wool, 25% Viscose, 10% Cashmere, 5% Lycra Lined for comfort Length: 49.2 inch/125cm Please note: product color may slightly vary due to photographic lighting sources or your monitor settings Notch collar Open front with self-tie belt (wrap closure) Side pockets Removable belt Made in Turkey Web ID: M3220 (Tiger 150) Sizing & Fit: Sizing & Fit: SIZE S HAS FOLLOWING MEASUREMENTS: Bust - 19 inch Waist - 19.5 inch Hips - 21 inch SIZE M HAS FOLLOWING MEASUREMENTS: Bust - 20 inch Waist - 20.5 inch Hips - 21.5 inch SIZE L HAS FOLLOWING MEASUREMENTS: Bust - 21 inch Waist - 21.5 inch Hips - 22.5 inch Slightly oversized silhouette. Hits below the knee. Order your normal US size. Fits true to size. If you plan to wear it open, you can tie the belt at the back to create a narrower waistline and hourglass shape. If you plan to wear it closed with belt tied in front, please note the front body panels should be worn one layer fully wrapped over the other. The double layers ensure complete warmth in particularly cold weather. If the help with choosing a correct size is needed, please feel free to contact us.", rating: 4.3})

        server.create("product", {id: "w012", name: "Cashmere Color-Block Robe Coat", category: "women", size: ["s", "m", "l", 'xl'], price: 251, discount: 18, brand: "normal", availableColor: ['gray', 'brown', 'black'], type: 'coat', imageUrl: [{img1: "/assets/images/products/w012-img1.jpg"}, {img2: "/assets/images/products/w012-img2.jpg"},{img3: "/assets/images/products/w012-img3.jpg"}, {img4: "/assets/images/products/w012-img4.jpg"},{img5: "/assets/images/products/w012-img5"}], productDetail: `I knew immediately that a colorblocked robe coat, a HARBISON signature, would work perfectly for our collaboration. Offering it in responsibly sourced wool and cashmere was the icing on the cake for every customer across the board, regardless of gender." -Charles Harbison OVERSIZED FIT: Very relaxed. Straight through the waist. Dropped shoulder. SUSTAINABILITY: Woven by masters at an Italian mill, this fabric uses a mix of 20% recycled cashmere and 20% certified Responsible Wool Standard wool. This global standard protects the sheep that supply the wool for this sweater as well as the land they graze, working to make it better for the environment and the sheep.`, rating: 4.7})

        // t-shirts
        server.create("product", {id: "w013", name: "Women Tshirt INTENSE FEELINGS Street Hip Hop Female", category: "women", size: ["s", "m", "l", 'xl', 'xxl'], price: 31, discount: 12, brand: "normal", availableColor: ['gray', 'brown', 'black', 'red'], type: 't-shirt', imageUrl: [{img1: "/assets/images/products/w013-img1.jpg"}, {img2: "/assets/images/products/w013-img2.jpg"},{img3: "/assets/images/products/w013-img3.jpg"}, {img4: "/assets/images/products/w013-img4.jpg"},], productDetail: `Women Tshirt INTENSE FEELINGS Street Hip Hop Female T-Shirts Loose Oversize Short Sleeve Tops Summer.`, rating: 4.4})

        server.create("product", {id: "w014", name: "Women Tshirt Demon Slayer", category: "women", size: ["s", "m", "l", 'xl', 'xxl'], price: 43, discount: 15, brand: "normal", availableColor: ['gray', 'brown', 'black', 'red'], type: 't-shirt', imageUrl: [{img1: "/assets/images/products/w014-img1.jpg"}, {img2: "/assets/images/products/w014-img2.jpg"}], productDetail: `Women Tshirt INTENSE FEELINGS Demon Slayer`, rating: 4.8})

        server.create("product", {id: "w015", name: "Women Tshirt Forever Young", category: "women", size: ["s", "m", "l", 'xl', 'xxl'], price: 35, discount: 15, brand: "normal", availableColor: ['gray', 'brown', 'black', 'red'], type: 't-shirt', imageUrl: [{img1: "/assets/images/products/w015-img1.jpg"}, {img2: "/assets/images/products/w015-img2.jpg"}], productDetail: `Women Tshirt INTENSE FEELINGS Demon Slayer`, rating: 4.8})

        server.create("product", {id: "w016", name: "Women Tshirt John Denver Sticker", category: "women", size: ["s", "m", "l", 'xl', 'xxl'], price: 55, discount: 20, brand: "normal", availableColor: ['gray', 'brown', 'black', 'red', 'green'], type: 't-shirt', imageUrl: [{img1: "/assets/images/products/w016-img1.jpg"}, {img2: "/assets/images/products/w016-img2.jpg"}], productDetail: `Women Tshirt INTENSE FEELINGS John Denver`, rating: 4.2})

        server.create("product", {id: "w017", name: "Women Tshirt Rick and Morty", category: "women", size: ["s", "m", "l", 'xl', 'xxl'], price: 55, discount: 12, brand: "normal", availableColor: ['gray', 'brown', 'black', 'red'], type: 't-shirt', imageUrl: [{img1: "/assets/images/products/w017-img1.jpg"}, {img2: "/assets/images/products/w017-img2.jpg"}], productDetail: `Women Tshirt INTENSE FEELINGS Rick and Morty`, rating: 4.8})

        server.create("product", {id: "w018", name: "Women Tshirt Special", category: "women", size: ["s", "m", "l", 'xl', 'xxl'], price: 33, discount: 15, brand: "normal", availableColor: ['gray', 'brown', 'black', 'red'], type: 't-shirt', imageUrl: [{img1: "/assets/images/products/w018-img1.jpg"}, {img2: "/assets/images/products/w018-img2.jpg"}], productDetail: `Women Tshirt INTENSE FEELINGS Special`, rating: 4.2})
        
        server.create("product", {id: "w019", name: "Women Tshirt NST", category: "women", size: ["s", "m", "l", 'xl', 'xxl'], price: 30, discount: 15, brand: "normal", availableColor: ['gray', 'brown', 'black', 'red'], type: 't-shirt', imageUrl: [{img1: "/assets/images/products/w019-img1.jpg"}, {img2: "/assets/images/products/w019-img2.jpg"}, {img3: "/assets/images/products/w019-img3.jpg"}], productDetail: `Women Tshirt INTENSE FEELINGS Demon Slayer`, rating: 4.2})

        server.create("product", {id: "w020", name: "Women Tshirt Multiverse Creature", category: "women", size: ["s", "m", "l", 'xl', 'xxl'], price: 43, discount: 12, brand: "normal", availableColor: ['gray', 'brown', 'black', 'red'], type: 't-shirt', imageUrl: [{img1: "/assets/images/products/w020-img1.jpg"}, {img2: "/assets/images/products/w020-img2.jpg"}, {img3: "/assets/images/products/w020-img3.jpg"}], productDetail: `Women Tshirt INTENSE FEELINGS Multiverse Creature`, rating: 4.3})

        // pajamas
        server.create("product", {id: "w030", name: "Lettuce Trim Women Pajama Set", category: "women", size: ["s", "m", "l"], price: 8, discount: 2, brand: "nomral", availableColor: ['red', 'black', 'pink'], type: 'pajamas', imageUrl: [{img1: "/assets/images/products/w030-img1.jpg"}, {img2: "/assets/images/products/w030-img2.jpg"}], productDetail: "Lettuce Trim Women Pajama Set Sleeveless Round Neck Crop Top & Full-Length Pants Female 2 Piece", rating: 4.4})

        server.create("product", {id: "w031", name: "Adult Christmas Onesie for Women Sherpa One-Piece Pajamas", category: "women", size: ["s", "m", "l"], price: 23, discount: 12, brand: "nomral", availableColor: ['green', 'yellow', 'white'], type: 'pajamas', imageUrl: [{img1: "/assets/images/products/w031-img1.jpg"}], productDetail: "ALL DAY COMFORT: You'll love the feel of the sherpa fleece fabric that's made using 100% premium polyester to create a women's Christmas onesie pajamas that keeps you warm n toasty without any irritation. Every Xmas one-piece onesie for women has a hoodie to turn up the coziness and a loose yet flattering fit for unrestricted movement.", rating: 4.5})

        server.create("product", {id: "w032", name: "Adult Christmas Onesie for Women Sherpa One-Piece Pajamas", category: "women", size: ["s", "m", "l"], price: 33, discount: 33, brand: "nomral", availableColor: ['green', 'yellow', 'white'], type: 'pajamas', imageUrl: [{img1: "/assets/images/products/w032-img1.jpg"}], productDetail: "ALL DAY COMFORT: You'll love the feel of the sherpa fleece fabric that's made using 100% premium polyester to create a women's Christmas onesie pajamas that keeps you warm n toasty without any irritation. Every Xmas one-piece onesie for women has a hoodie to turn up the coziness and a loose yet flattering fit for unrestricted movement.", rating: 4.5})

        server.create("product", {id: "w033", name: "Adult Christmas Onesie for Women Sherpa One-Piece Pajamas", category: "women", size: ["s", "m", "l"], price: 19, discount: 13, brand: "nomral", availableColor: ['green', 'yellow', 'white'], type: 'pajamas', imageUrl: [{img1: "/assets/images/products/w033-img1.jpg"}], productDetail: "ALL DAY COMFORT: You'll love the feel of the sherpa fleece fabric that's made using 100% premium polyester to create a women's Christmas onesie pajamas that keeps you warm n toasty without any irritation. Every Xmas one-piece onesie for women has a hoodie to turn up the coziness and a loose yet flattering fit for unrestricted movement.", rating: 4.5})

        server.create("product", {id: "w034", name: "Adult Christmas Onesie for Women Sherpa One-Piece Pajamas", category: "women", size: ["s", "m", "l"], price: 29, discount: 15, brand: "nomral", availableColor: ['green', 'yellow', 'white'], type: 'pajamas', imageUrl: [{img1: "/assets/images/products/w034-img1.jpg"},{img2: "/assets/images/products/w034-img2.jpg"}, {img3: "/assets/images/products/w034-img3.jpg"}], productDetail: "ALL DAY COMFORT: You'll love the feel of the sherpa fleece fabric that's made using 100% premium polyester to create a women's Christmas onesie pajamas that keeps you warm n toasty without any irritation. Every Xmas one-piece onesie for women has a hoodie to turn up the coziness and a loose yet flattering fit for unrestricted movement.", rating: 4.5})

        //blogs
        server.create('blog', {id: 'b01', author: 'jenny Alexander', title: '10 fashion trend for the modern woman', content: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus tempore voluptate omnis dolore numquam. Voluptatibus, unde deserunt alias tempora eveniet magnam ipsa delectus beatae accusamus nemo provident quaerat temporibus quas laudantium esse enim dolorum explicabo fugit. Omnis veritatis natus, provident voluptatum veniam perferendis harum magni consectetur explicabo accusamus, deleniti ipsum perspiciatis fugit. Autem rerum tenetur excepturi cupiditate error amet iste odio aliquam sequi dicta? Dolor quis esse fugit quae deleniti repudiandae aut cumque exercitationem laborum officia. Magni consectetur perferendis necessitatibus a quos quas non, sint, aliquam vitae ab dicta? Quia eius rerum assumenda, cumque modi ratione. Ipsum quisquam voluptatum qui.", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!"], createdOn: 'Nov 15, 2024', imgUrl: [{img1: '/assets/images/blogs/b001-img1.jpg'},{img2: '/assets/images/blogs/b001-img2.jpg'},{img3: '/assets/images/blogs/b001-img3.jpg'},{img4: '/assets/images/blogs/b001-img4.jpg'}]})

        server.create('blog', {id: 'b02', author: 'Tara Smith', title: 'Fashion Forward: Tips, Trends, and Inspiration', content: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus tempore voluptate omnis dolore numquam. Voluptatibus, unde deserunt alias tempora eveniet magnam ipsa delectus beatae accusamus nemo provident quaerat temporibus quas laudantium esse enim dolorum explicabo fugit. Omnis veritatis natus, provident voluptatum veniam perferendis harum magni consectetur explicabo accusamus, deleniti ipsum perspiciatis fugit. Autem rerum tenetur excepturi cupiditate error amet iste odio aliquam sequi dicta? Dolor quis esse fugit quae deleniti repudiandae aut cumque exercitationem laborum officia. Magni consectetur perferendis necessitatibus a quos quas non, sint, aliquam vitae ab dicta? Quia eius rerum assumenda, cumque modi ratione. Ipsum quisquam voluptatum qui.", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!"], createdOn: 'Sep 10, 2024', imgUrl: [{img1: '/assets/images/blogs/b002-img1.jpg'},{img2: '/assets/images/blogs/b002-img2.jpg'},{img3: '/assets/images/blogs/b002-img3.jpg'},{img4: '/assets/images/blogs/b002-img4.jpg'}]})

        server.create('blog', {id: 'b03', author: 'Jade Dane', title: 'Fall Fashion Frenzy: The Ultimate Style Guide', content: ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus tempore voluptate omnis dolore numquam. Voluptatibus, unde deserunt alias tempora eveniet magnam ipsa delectus beatae accusamus nemo provident quaerat temporibus quas laudantium esse enim dolorum explicabo fugit. Omnis veritatis natus, provident voluptatum veniam perferendis harum magni consectetur explicabo accusamus, deleniti ipsum perspiciatis fugit. Autem rerum tenetur excepturi cupiditate error amet iste odio aliquam sequi dicta? Dolor quis esse fugit quae deleniti repudiandae aut cumque exercitationem laborum officia. Magni consectetur perferendis necessitatibus a quos quas non, sint, aliquam vitae ab dicta? Quia eius rerum assumenda, cumque modi ratione. Ipsum quisquam voluptatum qui.", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, neque amet dolores suscipit aut molestiae qui ea dolorum animi!"], createdOn: 'Sep 20, 2024', imgUrl: [{img1: '/assets/images/blogs/b003-img1.jpg'},{img2: '/assets/images/blogs/b003-img2.jpg'},{img3: '/assets/images/blogs/b003-img3.jpg'},{img4: '/assets/images/blogs/b003-img4.jpg'}]})


        // team
        server.create('team', {id: 't01', name: 'Arlene McCoy', imgUrl: '/assets/images/designer02.jpg', position: 'Fashion Designer'})

        server.create('team', {id: 't02', name: 'Haru', imgUrl: '/assets/images/haru04.jpg', position: 'Founder & CEO'})

        server.create('team', {id: 't03', name: 'Jenny Wilson', imgUrl: '/assets/images/designer03.jpg', position: 'Fashion Designer'})

        // faqs
        server.create('faq', {id: 'faq1', question: 'What payment methods do you accepts?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat?', type: 'payment'})

        server.create('faq', {id: 'faq2', question: `Can I track my order after i'ts been placed?`, answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat?', type: 'order'})

        server.create('faq', {id: 'faq3', question: 'Do you offer customer support?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat?', type: 'customer support'})

        server.create('faq', {id: 'faq4', question: 'What is your return policy?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat?', type: 'return'})

        server.create('faq', {id: 'faq5', question: 'How to create Account?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat?', type: 'account'})

        server.create('faq', {id: 'faq6', question: 'Can I cancel my order after it is shipped?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat?', type: 'order'})
        
    },

    routes(){
        this.namespace = 'api'
        this.logging = false

        this.get('/products', (schema, request) => {
            return schema.products.all()
        })

        this.get('/products/:id', (schema, request) => {
            const id = request.params.id
            return schema.products.find(id)
        })

        this.get('/blogs', (schema, request) => {
            return schema.blogs.all()
        })

        this.get('/blogs/:id', (schema, request) => {
            const id = request.params.id
            return schema.blogs.find(id)
        })

        this.get('/team', (schema, request) => {
            return schema.teams.all()
        })

        this.get('/faq', (schema, request) => {
            return schema.faqs.all()
        })
    }
});