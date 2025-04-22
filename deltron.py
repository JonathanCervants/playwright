import pytest,re
from playwright.sync_api import Page, expect


def test_has_title():
    page.goto('https://www.deltron.com.pe/modulos/productos/items/postsql.php')

    expect(page).to_have_title(re.compile("Deltron"))