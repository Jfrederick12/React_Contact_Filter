const Faker = require('Faker');

const contactList = [];
const folderList = ['Business', 'Vacation', 'Hobbies', 'Entertainment', 'News', 'Shopping', 'Tech', 'Sports']

for (let i = 0; i < 100; i++) {
	const sender = { 
		sender: Faker.Name.findName(),
		email: Faker.Internet.email(),
		folder: folderList[Math.floor(Math.random() * folderList.length)],
		organize: [true, false][Math.floor(Math.random() * 2)]
	}
	contactList.push(sender)
}

export default contactList;

