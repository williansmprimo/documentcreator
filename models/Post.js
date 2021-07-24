const bd = require("./bd");

const Post = bd.sequelize.define("tb_postagens", {
	titulo : {
		type: bd.Sequelize.STRING
	},
	conteudo : {
		type: bd.Sequelize.STRING
	}
});

//Post.sync({force: true});
module.exports = Post;