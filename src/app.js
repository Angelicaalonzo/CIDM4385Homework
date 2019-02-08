class JumbotronComponent extends React.Component {

    //constructor
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    };

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                     <h1 className="display-4">Priceless Pies</h1>
                    <p className="lead">Priceless Pies lets you enter your zipcode, pick your pie, and then we compare prices for that particular pie in the area and then deliver you the cheapest one!</p>
            </div>
        );
    };
}

render() {
    return (
        <div className="form-group text-left">
        <label for="inputZip"> Zip code</label>
        <input type="email" class="form-control" id="examplezip" aria-describedby="zip" placeholder="Enter your zip code">
      </div>
      <div className="form-group text-left">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
    );
};
}

class PizzaEntry extends React.Component {
    //constructor
    constructor(props){
        super(props);
    }    

    render() {
        return (
            <<div className="card-columns text-center">
            <div className="card">
              <img src="src/src/Cheese.png" class="card-img-top" alt="Cheese">
              <div className="card-body">
                <h5 className="card-title">Cheese Pizza</h5>
                <p className="card-text">This Cheese Pizza will have you wanting more. With its low price and irresestiable smell you wont even feel guilty eating it.</p>
              </div>
              <button type="button" class="btn btn-primary btn-sm">Select</button>

            </div>

        );        
    }
}
