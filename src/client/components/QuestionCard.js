import React, {Component} from 'react'
import {_saveQuestionAnswer} from '../../_DATA'
import {connect} from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

const styles = {
    row: {
      display: 'flex',
      justifyContent: 'center',
    },
    avatar: {
      margin: 10,
      width: 90,
      height: 90,
    },
    bigAvatar: {
      width: 90,
      height: 90,
    },
    card: {
        minWidth: 275,
        margin: 100
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      button: {
        margin: "10%",
      },
      input: {
        display: 'none',
      },
  };



class QuestionCard extends Component {


    renderAvatar(ava){
        return (
            <div>
                <Avatar
                    alt="Adelle Charles"
                    src={ava}
                    className={classNames(styles.avatar, styles.bigAvatar)}
                />
            </div>
        )
    }
    
    render() {
        return (
            <div className="question">
                <Card className={styles.card}>
                    <CardContent>
                        <Typography className={styles.title} color="textSecondary" gutterBottom>
                        <Link to={"/questions/"+this.props.question.id}>Would you rather?</Link>
                        </Typography>
                        <div>
                            {this.renderAvatar(this.props.users[this.props.question.author].avatarURL)}
                        </div> 
                        
                    </CardContent>
                </Card>
            </div>
            

 
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.users
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);