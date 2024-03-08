// place files you want to import through the `$lib` alias in this folder.

export const city = [
	'Abengourou',
	'Abidjan',
	'Aboisso',
	'Adiaké',
	'Adzopé',
	'Agboville',
	'Agnibilékrou',
	'Akoupé',
	'Anyama',
	'Bangolo',
	'Béoumi',
	'Bettié',
	'Biankouma',
	'Bingerville',
	'Bloléquin',
	'Bocanda',
	'Bondoukou',
	'Bongouanou',
	'Bonoua',
	'Bouaflé',
	'Bouaké',
	'Boundiali',
	'Dabakala',
	'Dabou',
	'Daloa',
	'Danané',
	'Daoukro',
	'Dimbokro',
	'Divo',
	'Duékoué',
	'Ferkessédougou',
	'Gagnoa',
	'Grand-Bassam',
	'Grand-Lahou',
	'Guiglo',
	'Issia',
	'Jacqueville',
	'Katiola',
	'Korhogo',
	'Lakota',
	'Man',
	'Mankono',
	'Mbahiakro',
	'Odienné',
	'Ouangolodougou',
	'Port-Bouët',
	'Sakassou',
	'San-Pédro',
	'Sassandra',
	'Séguéla',
	'Sinfra',
	'Soubré',
	'Tabou',
	'Tanda',
	'Tiassalé',
	'Tingréla',
	'Touba',
	'Toumodi',
	'Vavoua',
	'Yamoussoukro',
	'Zouan-Hounien'
	// Vous pouvez ajouter d'autres villes au besoin
];

const commune = [
	'Cocody',
	'Marcory',
	'Plateau',
	'Attécoubé',
	'Treichville',
	'Adjamé',
	'Yopougon',
	'Port-Bouët',
	'Koumassi',
	'Bingerville',
	'Anyama',
	'Songon',
	'Abobo',
	'Williamsville'
];

export const allCity = city.map((item) => {
	return {
		value: item.toLocaleLowerCase(),
		label: item
	};
});

// export const allCity = toObject(city)
