import React from 'react'
import { useQuery, gql } from "@apollo/client";

const PULL_REQUESTS_QUERY = gql`
    query {
        repository(owner: "Checkout-R", name: "checkoutuinodeweb") {
            pullRequests(last: 6, states: OPEN) {
                nodes {
                    id,
                    title,
                    state,
                    createdAt,
                    number
                }
            }
        }
    }
`;

const PullRequests = () => {

    const { loading, error, data } = useQuery(PULL_REQUESTS_QUERY);

    if (error) {
        console.log(error)
    } else if (loading) {
        console.log("loading...") 
    } else {
        let number = 4998;
        let title = "Spinner styles parity";
        
        let requests = data.repository.pullRequests.nodes;
        requests = requests.filter(request => {
            if (request.number <= number) {
                return false
            }
            if (request.title !== title) {
                return false
            }
            return true
        });
        console.log(requests)
    }

    return (
        <div>
            <span>pull requests</span>
        </div>
    )
}

export default PullRequests
