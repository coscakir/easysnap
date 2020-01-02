import React, { Component } from "react";
import { Query } from "react-apollo";
import { GET_SNAPS } from "../../queries";
import TimeAgo from "react-timeago";

class Home extends Component {
  render() {
    const { session } = this.props;
    return (
      <div>
        <div className="description">
          <p className="sub_header__desc">
            simple snap app with <span>react</span>.
          </p>
        </div>

        <div>
          <form>
            <input
              className="add-snap__input"
              type="text"
              placeholder={
                session && session.activeUser
                  ? "add snap"
                  : "Please login to add snap"
              }
              disabled={!(session && session.activeUser)}
            />
          </form>
        </div>
        <div>
          <Query query={GET_SNAPS}>
            {({ data, loading, error }) => {
              if (loading)
                return <div className="loading">Loading snaps...</div>;
              if (error) return <div>Loading snaps...</div>;
              return (
                <div>
                  <ul className="snaps">
                    {data.snaps.map(snap => (
                      <li key={snap.id}>
                        <div className="title">{snap.text}</div>
                        <div className="date">
                          <span className="username">
                            @{snap.user.username}
                          </span>
                          <br />
                          <span>
                            <TimeAgo date={snap.createdAt} />
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="counter">{data.snaps.length} snap(s)</div>
                </div>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default Home;
