import axios from 'axios';

export let url = 'http://www.wordcandy.io/v1/';

exports.apiProfiles = {
    signUp: function(data) {
        return axios({
                url: url + "registration/",
                method: 'post',
                responseType: 'json',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data,
                validateStatus: function (status) {
                  return status;
                }
            })
            .then(response => {
                return response;
            }).catch(function(error) {
                return error;
            });
    },
    signIn: function(data) {
        return axios({
                url: url + "login/",
                method: 'post',
                responseType: 'json',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data,
                validateStatus: function (status) {
                  return status;
                }
            })
            .then(response => {
                return response;
            }).catch(function(error) {
                return error;
            });
    },
    subscribe: function(data) {
        return axios({
                url: url + "dashboard/subscribe/",
                method: 'post',
                responseType: 'json',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            })
            .then(response => {
                return response.data;
            }).catch(function(error) {
                return error;
            });
    },
}