Template.header.__helpers.get('getUrlMessenger').call(undefined,this._id)

let user = Meteor.users.findOne({
            _id: userId
        }, {
            fields: {
                webPId: 1,
                appPId: 1
            }
        })
