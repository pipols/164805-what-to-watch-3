import {reducer, initialState, ActionCreator} from "./state";
import {CardCount} from "../../const/common";


describe(`reducer data`, () => {
  it(`should return the initial state`, () => {
    expect(reducer(initialState, {})).toBe(initialState);
  });

  it(`should handle SET_GENRE`, () => {
    expect(reducer({genre: `All genres`}, ActionCreator.setGenre(`Comedy`))).toEqual({genre: `Comedy`});
  });

  it(`should handle ADD_CARDS_STACK`, () => {
    expect(reducer({shownCardsStack: 10}, ActionCreator.addCardsStack())).toEqual({shownCardsStack: 10 + CardCount.ADD});
  });

  it(`should handle SET_ACTIVE_PLAYER`, () => {
    expect(reducer({isActivePlayer: true}, ActionCreator.setActivePlayer(false))).toEqual({isActivePlayer: false});
  });

  it(`should handle RESET_STACK`, () => {
    expect(reducer({shownCardsStack: 10}, ActionCreator.resetStack())).toEqual({shownCardsStack: CardCount.INITIAL});
  });

  it(`should handle PAGE_PRELOADER`, () => {
    expect(reducer({isPagePreloader: true}, ActionCreator.pagePreloader(false))).toEqual({isPagePreloader: false});
  });

  it(`should handle SET_ID`, () => {
    expect(reducer({id: null}, ActionCreator.setId(3))).toEqual({id: 3});
  });

  it(`should handle SET_FORM_DISABLED_STATUS`, () => {
    expect(reducer({isFormDisabled: true}, ActionCreator.setFormDisabledStatus(false))).toEqual({isFormDisabled: false});
  });

});
