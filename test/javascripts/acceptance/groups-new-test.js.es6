import { acceptance, logIn } from "helpers/qunit-helpers";

acceptance("New Group");

QUnit.test("As an anon user", assert => {
  visit("/groups");

  andThen(() => {
    assert.equal(
      find('.groups-admin-dropdown').length, 0,
      'it should not display the admin dropdown'
    );
  });
});

QUnit.test("Creating a new group", assert => {
  logIn();
  Discourse.reset();

  visit("/groups");

  selectKit('.groups-admin-dropdown').expand().selectRowByValue("new");
  fillIn("input[name='name']", '1');

  andThen(() => {
    assert.equal(
      find('.tip.bad').text().trim(), I18n.t("groups.new.name.too_short"),
      'it should show the right validation tooltip'
    );

    assert.ok(
      find("button[title='Create']:disabled").length === 1,
      'it should disable the save button'
    );
  });

  fillIn("input[name='name']", 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

  andThen(() => {
    assert.equal(
      find('.tip.bad').text().trim(), I18n.t("groups.new.name.too_long"),
      'it should show the right validation tooltip'
    );
  });

  fillIn("input[name='name']", '');

  andThen(() => {
    assert.equal(
      find('.tip.bad').text().trim(), I18n.t("groups.new.name.blank"),
      'it should show the right validation tooltip'
    );
  });

  fillIn("input[name='name']", 'goodusername');

  andThen(() => {
    assert.equal(
      find('.tip.good').text().trim(), I18n.t("groups.new.name.available"),
      'it should show the right validation tooltip'
    );
  });

  click(".group-form-public-admission");

  andThen(() => {
    assert.equal(
      find('groups-new-allow-membership-requests').length, 0,
      'it should disable the membership requests checkbox'
    );
  });
});