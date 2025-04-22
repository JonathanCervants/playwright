import pytest,re
from playwright.sync_api import Page, expect

@pytest.fixture(scope="session")
def before_each_after_each(browser_context_args, playwright):
    return {"storage_state":"auth.json"}
    #print("before the test runs")

    # Go to the starting url before each test.
    #page.goto("https://playwright.dev/")
def test_main_navigation(page: Page):
    # Assertions use the expect API
    page.goto("https://contratos-qa.kurax.dev/")
   # Interact with login form
    page.get_by_label("Usuario").fill("sistema.test")
    page.get_by_label("Contraseña").fill("Kur4x2026")
    page.get_by_role("button").click()     
    page.url("/") 
   #page.get_by_role("button", name="login_submit_btn").click()      
    # page.get_by_label("Password").fill("password")
    # 
    
    # expect(page).to_have_title(re.compile("Gestion"))
    # page.get_by_role("link", name="Get started").click()

