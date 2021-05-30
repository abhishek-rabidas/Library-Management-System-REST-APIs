const mongoose = require('mongoose');
const BookList = mongoose.model('Books');

module.exports.display = (req, res) => {
    BookList.findById(req.params.id, (err, docs) => {
        if (!err) {
            return res.render('edit', {
                e: docs
            });
        }
    });
}

module.exports.update = (req, res) => {
    BookList.findByIdAndUpdate(req.params.id, req.body, () => {
        return res.redirect('back');
    })
}