import Model from '../../utils/Model'
import User from '../../modules/user/User'

class Note extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {
    super.initialize(props)

    this.published = props.published || 0
    this.note = props.note || ''
    this.entity_type = props.entity_type || ''
    this.entity_id = props.entity_id || 0

    // relate user model
    this.user = props.user ? new User(props.user) : new User({})
  }
}

export default Note