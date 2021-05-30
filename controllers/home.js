const mongoose = require('mongoose');
const BookList = mongoose.model('Books');

module.exports.home = (req, res) => {
    BookList.find((err, docs) => {
        if (!err) {
            return res.render('index', {
                list: docs
            });
        }
    });
}

module.exports.delete = (req, res) => {
    BookList.findByIdAndDelete(req.params.id, () => {
        return res.redirect('back');
    });
}