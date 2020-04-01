import User from '../models/User';
import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    const checkIsProvider = await User.findAll();

    if (!checkIsProvider)
      return res
        .status(401)
        .json({ error: 'Only providers can see notifications' });

    const notifications = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: -1 })
      .limit(20);

    return res.json(notifications);
  }

  async update(req, res) {
    console.log(req.params.id);
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    return res.json(notification);
  }
}

export default new NotificationController();
