import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import PeopleList from "@components/PeoplePage/PeopleList";
import { getApiResources } from "@utils/network";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";
import { API_PEOPLE } from "@constants/api";

import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  // const [errorApi, setErrorApi] = useState(false);

  const getResources = async (url) => {
    const res = await getApiResources(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResources(API_PEOPLE);
  }, []);

  return (
    <>
      <h1 className="header__text">Navigation</h1>
      {people && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
