import Test from '../models/Test';

class TestController {
  async index(req, res) {
    const users = await Test.findAll();

    return res.json(users);
  }
}

export default new TestController();
